import joblib
from flask import Flask, render_template, request
from flask_cors import CORS


def create_app():
    ext = joblib.load('ext.joblib')

    app = Flask(__name__)
    CORS(app)

    @app.route("/")
    def base():
        return "<h1>Hello from server!</h1>"

    @app.route('/predict', methods=['POST'])
    def predict():
        data = request.get_json()
        print(ext.predict([data['ratios']])[0])
        return f"{ext.predict([data['ratios']])[0]}"
    
    return app
import joblib
from flask import Flask, render_template, request
from flask_cors import CORS


ext = joblib.load('ext.joblib')

app = Flask(__name__)
CORS(app)


@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    print(data)
    print(ext.predict([data['ratios']])[0])
    return f"{ext.predict([data['ratios']])[0]}"


if __name__ == '__main__':
    app.run(debug=True)

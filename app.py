from flask import Flask
from flask_cors import CORS, cross_origin


app = Flask(__name__, static_folder='my-app/build', static_url_path='')

@app.route('/login', methods=['GET'])
def logged_in():
    return 'True'


@app.route('/api', methods=['GET'])
@cross_origin(app)
def index():
    return {
        "Tutorial": "La propia aplicación de Flask"
    }
@app.route('/')
@cross_origin(app)
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5001, debug=True)
    
    
class Barber:
    clients = []
    
    def __init__(self):
        pass
    
    def add_client(self, client):
        self.clients.append(client)
        
class Client:
    appointment = []
    
    def __init__(self):
        pass
    def add_appointment(self, appointment):
        self.appointment.append(appointment)
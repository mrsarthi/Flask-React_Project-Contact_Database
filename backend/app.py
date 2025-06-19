from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Contact

app = Flask(__name__)
CORS(app)

# Configure the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///contacts.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

# Create DB tables
with app.app_context():
    db.create_all()

# Test route


@app.route('/')
def home():
    return {"message": "Flask backend is working!"}

# GET all contacts


@app.route('/contacts', methods=['GET'])
def get_contacts():
    contacts = Contact.query.all()
    return jsonify([contact.to_dict() for contact in contacts])

# POST a new contact


@app.route('/contacts', methods=['POST'])
def add_contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone', '')

    if not name or not email:
        return jsonify({"error": "Name and email are required"}), 400

    new_contact = Contact(name=name, email=email, phone=phone)
    db.session.add(new_contact)
    db.session.commit()

    return jsonify(new_contact.to_dict()), 201


if __name__ == '__main__':
    app.run(debug=True)

from flask_app import app



from flask import render_template, session, redirect, request, flash
# from flask_app.models.show import Show



# Route to render main homepage
@app.route('/')
def home():
    
    return render_template("homepage.html")

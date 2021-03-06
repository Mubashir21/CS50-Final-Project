from flask import Flask, redirect, render_template, request

# Configure application
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/about")
def about():
    return render_template('about.html')
    
@app.route("/458speciale")
def speciale():
    return render_template('458speciale.html')

@app.route("/turboS")
def turboS():
    return render_template('turboS.html')

@app.route("/fordGT")
def fordGT():
    return render_template('fordGT.html')

@app.route("/gt2rs")
def gt2rs():
    return render_template('gt2rs.html')

@app.route("/f8spyder")
def f8spyder():
    return render_template('f8spyder.html')

@app.route("/675lt")
def lt675():
    return render_template('675lt.html')

@app.route("/turboes")
def turboes():
    return render_template('turboes.html')

@app.route("/rcs")
def rcs():
    return render_template('rcs.html')

@app.route("/gt3")
def gt3():
    return render_template('gt3.html')


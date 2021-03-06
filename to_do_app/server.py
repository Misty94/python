from flask import Flask, render_template, request, redirect, session # Import Flask to allow us to create our app
app = Flask(__name__) # Create a new instance of the Flask class called "app"
app.secret_key = "THIS IS MY SECRET" # there's no secrets on github
from todo import Todo

# @app.route( '/') # must go above the if statement
# @app.route( '/login' ) # both of these (if added to URL) will take you to the same place
# def hello_world():
#     return "Hello Python July 2022 class!"


# just add /python to your URL
# @app.route( '/python' )
# def display_python_message():
#     return "Hello, this is a different route /python."

# @app.route( '/hello/<first_name>/<last_name>' ) # this will grab the variable name (like a placeholder) // u can type the name in the browers there
# def greet_person( first_name, last_name ): # whatever is in the above < > needs to be the parameter also
    # print(f"Hey there {first_name} {last_name}")
    # return f"Howdy, {first_name} {last_name}"

# if there is a syntax error, the server/browser will shut down & you have to run the server again (python server.py)

# @app.route('/info/<name>/<int: age>')
# def display_info(name, age):
#     print(type(name), type(age))
#     return f"Name: {name} Age: {age}"

list_of_users = [{
    "first_name" : "Alex",
    "last_name" : "Miller",
    "id" : 1
},
{
    "first_name" : "Martha",
    "last_name" : "Smith",
    "id" : 2
},
{
    "first_name" : "Kenia",
    "last_name" : "Riveria",
    "id" : 3
}]

list_of_todos = [{
    "description" : "Learn Python",
    "status": "complete",
    "id" : 1,
    "user_id" : 1
},
{
    "description" : "Learn OOP",
    "status": "in_progress",
    "id" : 2,
    "user_id" : 1
},
{
    "description" : "Learn routes in Flask",
    "status": "in_progress",
    "id" : 3,
    "user_id" : 2
},
{
    "description" : "Learn POST",
    "status": "in_progress",
    "id" : 4,
    "user_id" : 3
}
]

"""
Method: GET
Getting all of a particular type
URL: '/todos'
Function: get_all_todos
        get_todos()

Method: GET
Getting one of a particular type
URL: '/todo/<int:id>'
Function: get_todo_by_id( id )

Method: GET
Displaying a form for a type
URL: '/todo/form'
Function: display_todo_form()

Method: POST
Creating a new type
URL: '/todo/new'
Function: create_todo()

METHOD: PUT (POST)
Updating an existing item of a particular table
URL: '/todo/<int:id>/update'
Function: update_todo(id)

METHOD: DELETE (GET/POST)
Delete an item from a particular table
URL: 'todo/<int:id./delete'
Function: delete_todo(id)

"""


@app.route( "/todos")
def get_todos():
    if "logged_user" not in session:
        return redirect('/user/login')
    logged_uid = int(session['logged_user'])
    list_of_todos = Todo.get_all() # running the class method new* so when you refresh browser page, terminal will print out a list of dictionaries that come from the database
    user = list_of_users[logged_uid - 1] # simulating getting the user from the database

    # print(type(logged_uid))
    return render_template("todos.html", todos = list_of_todos, user=user)

@app.route('/todo/form')
def display_todo_form():
    if "logged_user" not in session:
        return redirect('/user/login')
    logged_uid = int(session['logged_user'])
    user = list_of_users[logged_uid - 1]
    next_todo_id = len(list_of_todos) + 1
    return render_template('todo_form.html', users = list_of_users, user=user, id = next_todo_id)

@app.route('/todo/new', methods=['POST'])
def create_todo():
    if "logged_user" not in session:
        return redirect('/user/login')
        if session['logged_user'] != request.form['hidden']: 
            return "HEY THAT'S NOT YOU"
        # if int(request.form['id']) != len(list_of_todos) + 1:
        #     return "INVALID ID FOR NEXT TODO"

    # print(request.form)
    new_todo = {
        # "id" : int(request.form['id']),
        "description" : request.form['description'],
        "status" : request.form['status'],
        "user_id" : int(request.form['hidden'])
    }
    Todo.create( new_todo )
    # list_of_todos.append(new_todo)
    return redirect('/todos')

@app.route('/user/process_login', methods=['POST'])
def process_login():
    session['logged_user'] = request.form['user_id']
    return redirect('/todos')

@app.route('/user/login')
def user_login():
    return render_template("user_login.html", users = list_of_users)

@app.route('/user/logout')
def user_logout():
    deleted_id = session.pop('logged_user') #pop will return the value as well
    # session.clear() # it clears EVERYTHING in session
    # del session['logged_user'] # works like pop but it doesn't return anything
    return redirect('/user/login')

@app.route( '/todos/<int:id>/update/form')
def display_todo_update_form(id):
    #Create a method to grab the current todo

    # return render_template("")
    pass

@app.route('/todo/<int:id>/update', methods = ['POST'])
def update_todo(id):
    pass


if __name__=="__main__": #Ensure this file is being run directly and not from a different module
    app.run(debug=True) # run the app in debug mode
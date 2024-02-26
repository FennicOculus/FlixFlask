from flask import Flask, render_template
import os
import random

app = Flask(__name__,template_folder='templates',static_folder='static')

@app.route('/')
def home():
    image_files = os.listdir(os.path.join(app.static_folder, "images/pfps"))
    print(image_files)
    selected_image = random.choice(image_files)
    return render_template('index.html', profile_image=selected_image)

if __name__ == '__main__':
    app.run(debug=True)

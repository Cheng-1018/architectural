from flask import Flask, send_file, send_from_directory
import os

app = Flask(__name__)

# 网站根目录
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

@app.route('/')
def index():
    """返回主页"""
    return send_file('index.html')

@app.route('/pages/<path:filename>')
def pages(filename):
    """处理pages目录下的文件"""
    return send_from_directory(os.path.join(BASE_DIR, 'pages'), filename)

@app.route('/css/<path:filename>')
def css(filename):
    """处理CSS文件"""
    return send_from_directory(os.path.join(BASE_DIR, 'css'), filename)

@app.route('/js/<path:filename>')
def js(filename):
    """处理JavaScript文件"""
    return send_from_directory(os.path.join(BASE_DIR, 'js'), filename)

@app.route('/images/<path:filename>')
def images(filename):
    """处理图片文件"""
    return send_from_directory(os.path.join(BASE_DIR, 'images'), filename)

@app.route('/<path:path>')
def static_files(path):
    """处理其他静态文件"""
    return send_from_directory(BASE_DIR, path)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5003, debug=False)

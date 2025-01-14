from ninja import NinjaAPI, Schema, UploadedFile, File
import tempfile
import os
from datetime import date
import subprocess

api = NinjaAPI()

class upload_video(Schema):
    output_file:str

@api.post('/upload')
def convert_video(request, data:upload_video, file: UploadedFile = File(...)):
    output = data.output_file
    
     # Salvar o arquivo temporário em um caminho local
    with tempfile.NamedTemporaryFile(delete=False, suffix=".mp4") as temp_file:
        temp_file.write(file.read())
        temp_file_path = temp_file.name


    command = [
        'ffmpeg',
        '-i', file.file,
        output
    ]

    try: 
        subprocess.run(command, check=True)
    except subprocess.CalledProcessError as e:
        return {"Error:" f"Falha {e}"}
    
    finally:
        # Excluir o arquivo temporário após o uso
        os.remove(temp_file_path)


    

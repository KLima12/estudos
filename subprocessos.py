import subprocess

def convert_video(input_file, output_file): 
    # Comando FFmpeg para converter video
    command = [
        'ffmpeg',
        '-i', input_file, # Arquivo de entrada
        output_file # Arquivo de saída
    ]

    try: 
        subprocess.run(command, check=True)
        print(f"Conversão concluida {output_file}")
    except subprocess.CalledProcessError as e:
        print(f'Erro na conversão: {e}')

# Ex de uso: 

input_file = 'A Força do Amor.mp4'
output_file = 'output_video.avi'
convert_video(input_file, output_file)
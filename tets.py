import os

def write_folder_names_to_file(folder_path, output_file):
    # Check if the specified folder exists
    if not os.path.exists(folder_path):
        print(f"The folder '{folder_path}' does not exist.")
        return
    
    # Get all folder names in the specified folder
    folder_names = [name for name in os.listdir(folder_path) if os.path.isdir(os.path.join(folder_path, name))]
    
    # Write folder names to the output file
    with open(output_file, 'w') as f:
        for folder_name in folder_names:
            f.write(folder_name + '\n')

    print(f"Folder names have been written to '{output_file}'.")

# Specify the folder path and output file name
folder_path = 'static\images'
output_file = 'folder_names.txt'

print("start")
# Call the function
write_folder_names_to_file(folder_path, output_file)

import os
import re
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def generate_glossary(data_models_dir, glossary_file):
    logger.info(f"Starting glossary generation from {data_models_dir}")
    glossary = {}

    # Parcourir les fichiers dans le dossier DataModels
    for root, dirs, files in os.walk(data_models_dir):
        logger.info(f"Scanning directory: {root}")
        for file in files:
            if file.endswith('.cs'):
                logger.info(f"Processing file: {file}")
                with open(os.path.join(root, file), 'r') as f:
                    content = f.read()
                    # Recherche des classes C#
                    matches = re.findall(r'public class (\w+)\s*{', content)
                    logger.debug(f"Found classes in {file}: {matches}")
                    
                    # Recherche des enums C#
                    enum_matches = re.findall(r'public enum (\w+)\s*{', content)
                    logger.debug(f"Found enums in {file}: {enum_matches}")
                    
                    for match in matches + enum_matches:
                        logger.info(f"Adding to glossary: {match} from {file}")
                        glossary[match] = f"Defined in {file}"

    # Générer le fichier markdown
    logger.info(f"Writing glossary to {glossary_file}")
    with open(glossary_file, 'w') as f:
        f.write("# Glossary\n\n")
        for term, definition in sorted(glossary.items()):
            f.write(f"## {term}\n{definition}\n\n")
    
    logger.info("Glossary generation completed")

# Chemin vers le dossier DataModels
data_models_dir = "app/TrainOffice/Infrastructures/DataModels"

# Chemin vers le fichier de glossaire
glossary_file = "glossary.md"

generate_glossary(data_models_dir, glossary_file)

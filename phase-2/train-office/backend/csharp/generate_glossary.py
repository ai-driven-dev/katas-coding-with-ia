import argparse
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
                try:
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
                except UnicodeDecodeError as e:
                    logger.error(f"Failed to read {file}: {e}")

    # Générer le fichier markdown
    logger.info(f"Writing glossary to {glossary_file}")
    with open(glossary_file, 'w') as f:
        f.write("# Glossary\n\n")
        for term, definition in sorted(glossary.items()):
            f.write(f"## {term}\n{definition}\n\n")
    
    logger.info("Glossary generation completed")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate a glossary from C# data models.")
    parser.add_argument("--data_models_dir", default="app/TrainOffice/Infrastructures/DataModels",
                        help="Path to the DataModels directory")
    parser.add_argument("--glossary_file", default="glossary.md", help="Path to the output glossary file")
    args = parser.parse_args()

    generate_glossary(args.data_models_dir, args.glossary_file)
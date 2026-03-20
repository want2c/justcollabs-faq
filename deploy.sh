#!/bin/bash

# Ensure you exit on error
set -e

# Use the specific identity file for SSH with alias
export GIT_SSH_COMMAND='ssh -i ~/.ssh/id_ed25519_faq'

# Run the Docusaurus deploy command
docusaurus deploy


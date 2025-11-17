#!/bin/bash
# Download free stock images as temporary placeholders
# These are from Unsplash (free to use)

curl -L "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop" -o workshop-exterior.webp
curl -L "https://images.unsplash.com/photo-1632823469653-e98ba8494ac0?w=800&h=600&fit=crop" -o workshop-interior.webp
curl -L "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&h=600&fit=crop" -o team-at-work.webp
curl -L "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=800&h=600&fit=crop" -o diagnostic-equipment.webp
curl -L "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=600&fit=crop" -o before-after-1.webp
curl -L "https://images.unsplash.com/photo-1625047508390-d18235a1c3ca?w=800&h=600&fit=crop" -o before-after-2.webp

echo "Placeholder images downloaded! Replace with your actual workshop photos."

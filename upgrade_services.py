import os
import glob
import re

base_dir = "/Users/abbasrizvi/muller/app/services"
pattern = os.path.join(base_dir, "*/page.tsx")

for filepath in glob.glob(pattern):
    # skip root canal since we manually did a bespoke layout for it
    if "root-canal" in filepath:
        continue
    
    with open(filepath, 'r') as f:
        content = f.read()

    # Define the regex replacements for the hero section
    # 1. Outer section
    content = re.sub(
        r'<section className="border-b border-border/60 bg-muted/30 py-12">\s*<div className="container mx-auto max-w-6xl px-4">',
        r'<section className="relative overflow-hidden border-b border-primary/5 bg-gradient-to-br from-background via-muted/30 to-background py-16 md:py-24">\n        <div className="absolute top-0 right-0 -z-10 size-[500px] rounded-full bg-primary/10 blur-[130px]" />\n        <div className="container mx-auto max-w-7xl px-4 text-center">',
        content
    )
    
    # 2. H1 tag
    content = re.sub(
        r'<h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">',
        r'<h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">',
        content
    )
    
    # 3. P tag under H1
    content = re.sub(
        r'<p className="mt-3 max-w-2xl text-lg text-muted-foreground">',
        r'<p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed text-balance">',
        content
    )
    
    # 4. Secondary container margin widening
    content = re.sub(
        r'<section className="container mx-auto max-w-6xl px-4 py-12">',
        r'<section className="container mx-auto max-w-7xl px-4 py-16 md:py-24">',
        content
    )
    
    with open(filepath, 'w') as f:
        f.write(content)
    print(f"Upgraded {filepath}")


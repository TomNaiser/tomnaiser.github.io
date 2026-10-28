"""Render the selected contact bitmap (variant 4) in both website themes.

Run locally with Pillow; Arial Bold and Georgia Bold are read from Windows.
Only raster output is published. Never print the address or add it as PNG metadata.
"""
import json
import math
import random
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parent.parent
address = ''.join(map(chr, json.loads((root / 'src/data/contact.json').read_text())['codepoints']))
fonts = [root / 'public/fonts/Manrope-Variable.ttf', Path('C:/Windows/Fonts/arialbd.ttf'), Path('C:/Windows/Fonts/georgiab.ttf')]
if not all(font.exists() for font in fonts):
    raise SystemExit('The selected design requires Manrope, Arial Bold and Georgia Bold.')
output = root / 'public/images/contact'
output.mkdir(parents=True, exist_ok=True)
width, height = 1060, 230
palettes = {
    'dark': {'bg': (16,25,28), 'grid': (32,47,47), 'curve': (91,113,87), 'ink': [(231,238,223),(206,221,202),(223,231,212),(199,219,193)]},
    'light': {'bg': (245,245,239), 'grid': (215,223,209), 'curve': (136,154,126), 'ink': [(27,45,49),(39,61,46),(34,52,48),(47,68,43)]},
}
for theme, colours in palettes.items():
    rng = random.Random(20261032)
    image = Image.new('RGB', (width,height), colours['bg'])
    draw = ImageDraw.Draw(image)
    for x in range(30,width,27):
        draw.line((x,22,x+28,height-22),fill=colours['grid'],width=1)
    for y in range(27,height-18,24):
        draw.line((25,y,width-25,y-8),fill=colours['grid'],width=1)
    glyphs = []
    for i,char in enumerate(address):
        font = ImageFont.truetype(str(fonts[i % len(fonts)]),rng.randrange(62,73))
        glyph = Image.new('RGBA',(120,142))
        ImageDraw.Draw(glyph).text((60,98),char,font=font,fill=colours['ink'][i % 4],anchor='ms')
        glyph = glyph.rotate(rng.uniform(-13,13),resample=Image.Resampling.BICUBIC)
        advance = font.getlength(char) + rng.uniform(3,8)
        glyphs.append((glyph,advance,rng.randint(-13,13)))
    text_layer = Image.new('RGBA',(width,height))
    x = (width - sum(glyph[1] for glyph in glyphs))/2
    for glyph,advance,offset in glyphs:
        text_layer.alpha_composite(glyph,(round(x+advance/2-60),30+offset))
        x += advance
    warped = Image.new('RGBA',(width,height))
    for x in range(width):
        offset = round(3*math.sin(x*.045+4))
        warped.paste(text_layer.crop((x,0,x+1,height)),(x,offset))
    image = Image.alpha_composite(image.convert('RGBA'),warped)
    curve = [(x,round(height/2+30*math.sin(x/170))) for x in range(55,width-55)]
    ImageDraw.Draw(image).line(curve,fill=(*colours['curve'],255),width=2)
    bitmap = image.convert('RGB')
    bitmap.save(output / f'email-captcha4-{theme}.png')
    # Keep previously published image URLs useful without serving the old design.
    bitmap.save(output / f'email-{theme}.png')
print('Selected contact design rendered for both themes; address omitted from log.')

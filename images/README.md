# Images Folder

This folder should contain your photography images.

## Required Images

Please add the following images to this folder:

### For Home Page (3 featured images)
- `placeholder-1.jpg`
- `placeholder-2.jpg`
- `placeholder-3.jpg`

### For Gallery Page (9+ images)
- `placeholder-4.jpg`
- `placeholder-5.jpg`
- `placeholder-6.jpg`
- `placeholder-7.jpg`
- `placeholder-8.jpg`
- `placeholder-9.jpg`

You can add more images by adding them to the gallery.html file.

### For About Page (1 profile image)
- `profile-placeholder.jpg`

## Image Recommendations

- **Format**: JPG or PNG
- **Resolution**: 1920px on the longest side for gallery images
- **File Size**: Try to keep under 500KB per image for faster loading
- **Aspect Ratio**: Any aspect ratio works (the masonry layout adapts), but consistent quality is recommended

## Adding More Gallery Images

To add more images to your gallery:

1. Add the image file to this folder
2. Open `gallery.html`
3. Add a new masonry item:
```html
<div class="masonry-item">
    <img src="images/your-image-name.jpg" alt="Description of your photo">
</div>
```

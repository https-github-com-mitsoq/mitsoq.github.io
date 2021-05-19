
const data = {
    "url": "https://staging.ohsuper.com/feature/basics/106095b8fa",
    "heading_style": "",
    "alt_tag": "TESTTTING1",
    "subtext_style": "",
    "title": "",
    "button_style": "",
    "subtitle": "",
    "heading": "",
    "url_target_blank": false,
    "mobile_image": null,
    "overlay": false,
    "subtext": "",
    "images": [
        {
        "base_ssl_url": "https://za.staging.a.sprbl.st/{size}filters:quality({quality}):format({extension})/cms/BASIC-REFRESH_VX3mC0I.gif",
        "base_url": "http://za.staging.a.sprbl.st/{size}filters:quality({quality}):format({extension})/cms/BASIC-REFRESH_VX3mC0I.gif",
        "mime_type": null,
        "filename": "basic refresh 3",
        "force_png": false,
        "type": "JPG",
        "default_serve_extension": null,
        "aspect_ratio": "1.2521739130434784",
        "width": 575,
        "id": 106406,
        "height": 720,
        "extension": null,
        "crop_strategy": null
        }
    ]
};

/*
    <img
    refs="img-placeholder"
    :alt="data.alt_tag"
    :src="filterAssetUrl(data.images[0])"
    :title="data.title"
    :class="{ 'lazy-video-loaded': loaded }"
    class="lazy-video"
    style="width: 100%; height: auto;"
    @load="loaded = true"
    />
*/
def language_switcher(language):
    """Language Switcher helper

    This is the function which maps language codes to their respective
    spacy equivalent language models. You can add support of more languages by
    adding here.
    Returns: The spacy model for the given language code
    """
    language_map = {
        "en": "en_core_web_sm",
        "fr": "fr_core_news_sm",
        "de": "de_core_news_sm",
        "it": "it_core_news_sm"
    }
    return language_map.get(language, "Language Not Supported!")
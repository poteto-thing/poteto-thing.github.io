var _gm_hidden_input = null;

function _gm_init_mobile_input() {
    if (_gm_hidden_input) return;
    _gm_hidden_input = document.createElement("input");
    _gm_hidden_input.type = "text";
    _gm_hidden_input.autocapitalize = "none";
    _gm_hidden_input.autocomplete = "off";
    // Must remain visible to the DOM (opacity 0, not display:none) so mobile browsers allow focus
    _gm_hidden_input.style.position = "fixed";
    _gm_hidden_input.style.top = "0px";
    _gm_hidden_input.style.left = "0px";
    _gm_hidden_input.style.width = "1px";
    _gm_hidden_input.style.height = "1px";
    _gm_hidden_input.style.opacity = "0";
    _gm_hidden_input.style.border = "none";
    _gm_hidden_input.style.zIndex = "-1";
    document.body.appendChild(_gm_hidden_input);

    // Sync typed characters into GameMaker's keyboard_string
    _gm_hidden_input.addEventListener("input", function () {
        // Optional: clear value or read via js_get_mobile_text()
    });
}

function js_open_mobile_keyboard() {
    _gm_init_mobile_input();
    _gm_hidden_input.focus();
}

function js_close_mobile_keyboard() {
    if (_gm_hidden_input) {
        _gm_hidden_input.blur();
    }
}

function js_get_mobile_text() {
    return _gm_hidden_input ? _gm_hidden_input.value : "";
}

function js_set_mobile_text(str) {
    _gm_init_mobile_input();
    _gm_hidden_input.value = str;
}

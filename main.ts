function button () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Heart)
    }
}
basic.forever(function () {
    button()
})

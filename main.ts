bluetooth.onBluetoothConnected(function () {
    pin0 = 0
    pin8 = 0
    pin12 = 0
    pin16 = 0
    drive = 0
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(function () {
    drive = 0
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.showString("D")
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        pin0 = 0
        pin8 = 0
        pin12 = 1
        pin16 = 1
        drive = 1
    } else {
        if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
            pin0 = 1
            pin8 = 1
            pin12 = 0
            pin16 = 0
            drive = 2
        } else {
            if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_UP || control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_UP) {
                pin0 = 0
                pin8 = 0
                pin12 = 0
                pin16 = 0
                drive = 0
            } else {
            	
            }
        }
    }
    if (drive > 0) {
        if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
            if (drive == 1) {
                pin0 = 0
                pin8 = 0
                pin12 = 1
                pin16 = 0
            } else {
                pin0 = 0
                pin8 = 1
                pin12 = 0
                pin16 = 0
            }
        } else {
            if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
                if (drive == 1) {
                    pin0 = 0
                    pin8 = 0
                    pin12 = 0
                    pin16 = 1
                } else {
                    pin0 = 1
                    pin8 = 0
                    pin12 = 0
                    pin16 = 0
                }
            } else {
                if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_UP || control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_UP) {
                    if (drive == 1) {
                        pin0 = 0
                        pin8 = 0
                        pin12 = 1
                        pin16 = 1
                        drive = 1
                    } else {
                        pin0 = 1
                        pin8 = 1
                        pin12 = 0
                        pin16 = 0
                        drive = 2
                    }
                } else {
                	
                }
            }
        }
    }
    pins.digitalWritePin(DigitalPin.P0, pin0)
    pins.digitalWritePin(DigitalPin.P8, pin8)
    pins.digitalWritePin(DigitalPin.P12, pin12)
    pins.digitalWritePin(DigitalPin.P16, pin16)
})
let drive = 0
let pin16 = 0
let pin12 = 0
let pin8 = 0
let pin0 = 0
basic.showIcon(IconNames.Triangle)

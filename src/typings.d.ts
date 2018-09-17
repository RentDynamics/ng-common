declare var jsSHA;

interface HTMLElement {
    getContext(dimension: string): any;
    pickmeup(options?: {});
    pickmeup(eventName: string, value?: any);
}

interface JQuery {
    pickmeup(options?: {});
    pickmeup(eventName: string, value?: any);
    fullCalendar(options?: any);

    HTMLElement: HTMLElement

    // datepicker(eventName: string, value?: any);
    // datetimepicker(eventName: string, value?: any);
    // datetimepicker(options?: {});
}

export function parseWithDate(jsonString: string): any {
    var reDateDetect = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;  // startswith: 2015-04-29T22:06:55
    var resultObject = JSON.parse(jsonString,(key: any, value: any) => {
        if (typeof value == 'string' && (reDateDetect.exec(value))) {
            return new Date(value);
        }
        return value;
    });
    return resultObject;
}
function DateTimezone(offset) {
    d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    return new Date(utc + (3600000 * offset));
}

exports.DateTimezone = DateTimezone;

const Constants = {
    baseUrl: 'https://admin.ikiff.ir/',
    dateFormat: 'YYYY-MM-DD',
    datetimeFormat: 'YYYY-MM-DD HH:mm',
    expireToken: 7,
    jDateFormat: 'jYYYY-jMM-jDD',
    jDateTimeFormat: 'jYYYY-jMM-jDD HH:mm',
    siteUrl: 'https://ikiff.ir/'
};

const Patterns = {
    username: /^[A-Za-z0-9]([A-Za-z0-9_]{1,48})[A-Za-z0-9_]$/,
    urlname: /^[A-Za-z]([A-Za-z0-9-]{1,48})[A-Za-z0-9-]$/,
    mobile: /^(09)[0-9]{9}$/,
    email: /^\w+([-.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    name: /^[A-Za-z\u0600-\u06FF\u200c][A-Za-z\u0600-\u06FF\u200c ]{1,48}[A-Za-z\u0600-\u06FF\u200c]$/,
    rolename: /^[A-Za-z0-9\u0600-\u06FF\u200c][0-9A-Za-z\u0600-\u06FF\u200c ]{1,48}[A-Za-z0-9\u0600-\u06FF\u200c]$/,
    latlong: /^[0-9]{2,3}(\.)[0-9]{6}$/,
    tag: /^[a-zA-Z0-9_\u0600-\u06FF\u200c]{2,20}$/
};

const ToPersian = (En) => {
    let Persian = [];
    `${En}`.split('').map(item=> {
        switch (item) {
            case "0":
                Persian.push('۰');
                break;
            case "1":
                Persian.push('۱');
                break;
            case "2":
                Persian.push('۲');
                break;
            case "3":
                Persian.push('۳');
                break;
            case "4":
                Persian.push('۴');
                break;
            case "5":
                Persian.push('۵');
                break;
            case "6":
                Persian.push('۶');
                break;
            case "7":
                Persian.push('۷');
                break;
            case "8":
                Persian.push('۸');
                break;
            case "9":
                Persian.push('۹');
                break;
            case ",":
                Persian.push(',');
                break;
            case "*":
                Persian.push(' **** ');
                break;
            default:
                break;
        }
    });
    return Persian.join('');
};

const PriceFormat = (value) => {
    return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export { Constants, Patterns, PriceFormat, ToPersian };
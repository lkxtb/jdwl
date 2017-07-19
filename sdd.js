/**
 * Created by user on 2017/7/5.
 */

function dateDiff(sDate1,sDate2,sDate3) {

    var a, b, c, d, today, e, f, g, h;


    h = sDate3;
    if ((h) == parseInt(1)) {

        today = new Date();
        a = today.getFullYear();
        b = today.getMonth() + 1;
        c = today.getDate();
        d = new Date(b + '-' + c + '-' + a);
        e = sDate2.split("-");
        f = new Date(e[1] + '-' + e[2] + '-' + e[0]);
        g = parseInt(Math.abs(d - f) / 1000 / 60 / 60 / 24);
        if (parseInt(g) > parseInt(0)) {
            a = sDate1.split("-");
            b = new Date(a[1] + '-' + a[2] + '-' + a[0]);
            a = sDate2.split("-");
            c = new Date(a[1] + '-' + a[2] + '-' + a[0]);
            d = parseInt(Math.abs(b - c) / 1000 / 60 / 60 / 24);
            alert(d);
            if (parseInt(d) > parseInt(365)) {
                alert("Time gap is more than 1 year");
                return true;
            }
            if (parseInt(d) > parseInt(182)) {
                alert("Time gap is more than 6 mouths");
                return true;
            }
            if (parseInt(d) > parseInt(30)) {
                alert("Time gap is more than 1 mouth");
                return true;
            }
            if (parseInt(d) > parseInt(7)) {
                alert("Time gap is more than 1 week");
                return true;
            }
            if (parseInt(d) > parseInt(3)) {
                alert("Time gap is more than 3 days");
                return true;
            }
            if (parseInt(d) > parseInt(0)) {
                alert("Time gap is in 3 days");
                return true;
            }
            alert("Just that day");
            return true;
        }
        today = new Date();
        a = today.getFullYear();
        b = today.getMonth() + 1;
        c = today.getDate();
        d = new Date(b + '-' + c + '-' + a);
        e = sDate1.split("-");
        f = new Date(e[1] + '-' + e[2] + '-' + e[0]);
        g = parseInt(Math.abs(d - f) / 1000 / 60 / 60 / 24);
        alert(g);
        if (parseInt(g) > parseInt(365)) {
            alert("Time gap is more than 1 year");
            return true;
        }
        if (parseInt(g) > parseInt(182)) {
            alert("Time gap is more than 6 mouths");
            return true;
        }
        if (parseInt(g) > parseInt(30)) {
            alert("Time gap is more than 1 mouth");
            return true;
        }
        if (parseInt(g) > parseInt(7)) {
            alert("Time gap is more than 1 week");
            return true;
        }
        if (parseInt(g) > parseInt(3)) {
            alert("Time gap is more than 3 days");
            return true;
        }
        if (parseInt(g) > parseInt(0)) {
            alert("Time gap is in 3 days");
            return true;
        }
        alert(today);
        return true;
    }

    if ((h) == parseInt(2)) {
        today = new Date();
        a = today.getFullYear();
        b = today.getMonth() + 1;
        c = today.getDate();
        d = new Date(b + '-' + c + '-' + a);
        e = sDate2.split("-");
        f = new Date(e[1] + '-' + e[2] + '-' + e[0]);
        g = parseInt(Math.abs(d - f) / 1000 / 60 / 60 / 24);
        if (parseInt(g) > parseInt(0)) {
            a = sDate1.split("-");
            b = new Date(a[1] + '-' + a[2] + '-' + a[0]);
            a = sDate2.split("-");
            c = new Date(a[1] + '-' + a[2] + '-' + a[0]);
            d = parseInt(Math.abs(b - c) / 1000 / 60 / 60 / 24);
            alert(d);
            if (parseInt(d) > parseInt(365)) {
                alert("Time gap is more than 1 year");
                return true;
            }
            if (parseInt(d) > parseInt(182)) {
                alert("Time gap is more than 6 mouths");
                return true;
            }
            if (parseInt(d) > parseInt(152)) {
                alert("Time gap is more than 5 mouth");
                return true;
            }
            if (parseInt(d) > parseInt(121)) {
                alert("Time gap is more than 4 mouth");
                return true;
            }
            if (parseInt(d) > parseInt(91)) {
                alert("Time gap is more than 3 mouth");
                return true;
            }
            if (parseInt(d) > parseInt(60)) {
                alert("Time gap is more than 2 mouth");
                return true;
            }
            if (parseInt(d) > parseInt(30)) {
                alert("Time gap is more than 1 mouth");
                return true;
            }
            if (parseInt(d) > parseInt(0)) {
                alert("Time gap is less than 1 mouth");
                return true;
            }
            alert("Just that day");
            return true;
        }
        today = new Date();
        a = today.getFullYear();
        b = today.getMonth() + 1;
        c = today.getDate();
        d = new Date(b + '-' + c + '-' + a);
        e = sDate1.split("-");
        f = new Date(e[1] + '-' + e[2] + '-' + e[0]);
        g = parseInt(Math.abs(d - f) / 1000 / 60 / 60 / 24);
        alert(g);
        if (parseInt(g) > parseInt(365)) {
            alert("Time gap is more than 1 year");
            return true;
        }
        if (parseInt(g) > parseInt(182)) {
            alert("Time gap is more than 6 mouths");
            return true;
        }
        if (parseInt(g) > parseInt(152)) {
            alert("Time gap is more than 5 mouth");
            return true;
        }
        if (parseInt(g) > parseInt(121)) {
            alert("Time gap is more than 4 mouth");
            return true;
        }
        if (parseInt(g) > parseInt(91)) {
            alert("Time gap is more than 3 mouth");
            return true;
        }
        if (parseInt(g) > parseInt(60)) {
            alert("Time gap is more than 2 mouth");
            return true;
        }
        if (parseInt(g) > parseInt(30)) {
            alert("Time gap is more than 1 mouth");
            return true;
        }
        if (parseInt(g) > parseInt(0)) {
            alert("Time gap is less than 1 mouth");
            return true;
        }
        alert(today);
        return true;
    }
    if ((h) == parseInt(3)) {
        today = new Date();
        a = today.getFullYear();
        b = today.getMonth() + 1;
        c = today.getDate();
        d = new Date(b + '-' + c + '-' + a);
        e = sDate2.split("-");
        f = new Date(e[1] + '-' + e[2] + '-' + e[0]);
        g = parseInt(Math.abs(d - f) / 1000 / 60 / 60 / 24);
        if (parseInt(g) > parseInt(0)) {
            a = sDate1.split("-");
            b = new Date(a[1] + '-' + a[2] + '-' + a[0]);
            a = sDate2.split("-");
            c = new Date(a[1] + '-' + a[2] + '-' + a[0]);
            d = parseInt(Math.abs(b - c) / 1000 / 60 / 60 / 24);
            alert(d);
            if (parseInt(d) > parseInt(90)) {
                alert("Time gap is more than 3 mouth");
                return true;
            }
            if (parseInt(d) > parseInt(60)) {
                alert("Time gap is more than 2 mouth");
                return true;
            }
            if (parseInt(d) > parseInt(30)) {
                alert("Time gap is more than 1 mouth");
                return true;
            }
            if (parseInt(d) > parseInt(21)) {
                alert("Time gap is more than 3 week");
                return true;
            }
            if (parseInt(d) > parseInt(14)) {
                alert("Time gap is more than 2 week");
                return true;
            }
            if (parseInt(d) > parseInt(7)) {
                alert("Time gap is more than 1 week");
                return true;
            }
            if (parseInt(d) > parseInt(3)) {
                alert("Time gap is more than 3 days");
                return true;
            }
            if (parseInt(d) > parseInt(0)) {
                alert("Time gap is in 3 days");
                return true;
            }
            alert("Just that day");
            return true;
        }
        today = new Date();
        a = today.getFullYear();
        b = today.getMonth() + 1;
        c = today.getDate();
        d = new Date(b + '-' + c + '-' + a);
        e = sDate1.split("-");
        f = new Date(e[1] + '-' + e[2] + '-' + e[0]);
        g = parseInt(Math.abs(d - f) / 1000 / 60 / 60 / 24);
        alert(g);
        if (parseInt(g) > parseInt(90)) {
            alert("Time gap is more than 3 mouth");
            return true;
        }
        if (parseInt(g) > parseInt(60)) {
            alert("Time gap is more than 2 mouth");
            return true;
        }
        if (parseInt(g) > parseInt(30)) {
            alert("Time gap is more than 1 mouth");
            return true;
        }
        if (parseInt(g) > parseInt(21)) {
            alert("Time gap is more than 3 week");
            return true;
        }
        if (parseInt(g) > parseInt(14)) {
            alert("Time gap is more than 2 week");
            return true;
        }
        if (parseInt(g) > parseInt(7)) {
            alert("Time gap is more than 1 week");
            return true;
        }
        if (parseInt(g) > parseInt(3)) {
            alert("Time gap is more than 3 days");
            return true;
        }
        if (parseInt(g) > parseInt(0)) {
            alert("Time gap is in 3 days");
            return true;
        }
        alert(today);
        return true;
    }
    if ((h) == parseInt(4)) {
        today = new Date();
        a = today.getFullYear();
        b = today.getMonth() + 1;
        c = today.getDate();
        d = new Date(b + '-' + c + '-' + a);
        e = sDate2.split("-");
        f = new Date(e[1] + '-' + e[2] + '-' + e[0]);
        g = parseInt(Math.abs(d - f) / 1000 / 60 / 60 / 24);
        if (parseInt(g) > parseInt(0)) {
            a = sDate1.split("-");
            b = new Date(a[1] + '-' + a[2] + '-' + a[0]);
            a = sDate2.split("-");
            c = new Date(a[1] + '-' + a[2] + '-' + a[0]);
            d = parseInt(Math.abs(b - c) / 1000 / 60 / 60 / 24);
            alert(d);
            if (parseInt(d) > parseInt(10)) {
                alert("Time gap is more than 10 days");
                return true;
            }
            if (parseInt(d) > parseInt(9)) {
                alert("Time gap is 10 days");
                return true;
            }
            if (parseInt(d) > parseInt(8)) {
                alert("Time gap is 9 days");
                return true;
            }
            if (parseInt(d) > parseInt(7)) {
                alert("Time gap is 8 days");
                return true;
            }
            if (parseInt(d) > parseInt(6)) {
                alert("Time gap is 7 days");
                return true;
            }
            if (parseInt(d) > parseInt(5)) {
                alert("Time gap is 6 days");
                return true;
            }
            if (parseInt(d) > parseInt(4)) {
                alert("Time gap is 5 days");
                return true;
            }
            if (parseInt(d) > parseInt(3)) {
                alert("Time gap is 4 days");
                return true;
            }
            if (parseInt(d) > parseInt(2)) {
                alert("Time gap is 3 days");
                return true;
            }
            if (parseInt(d) > parseInt(1)) {
                alert("Time gap is 2 days");
                return true;
            }
            if (parseInt(d) > parseInt(0)) {
                alert("Time gap is 1 day");
                return true;
            }
            alert("Just that day");
            return true;
        }
        today = new Date();
        a = today.getFullYear();
        b = today.getMonth() + 1;
        c = today.getDate();
        d = new Date(b + '-' + c + '-' + a);
        e = sDate1.split("-");
        f = new Date(e[1] + '-' + e[2] + '-' + e[0]);
        g = parseInt(Math.abs(d - f) / 1000 / 60 / 60 / 24);
        alert(g);
        if (parseInt(g) > parseInt(10)) {
            alert("Time gap is more than 10 days");
            return true;
        }
        if (parseInt(g) > parseInt(9)) {
            alert("Time gap is 10 days");
            return true;
        }
        if (parseInt(g) > parseInt(8)) {
            alert("Time gap is 9 days");
            return true;
        }
        if (parseInt(g) > parseInt(7)) {
            alert("Time gap is 8 days");
            return true;
        }
        if (parseInt(g) > parseInt(6)) {
            alert("Time gap is 7 days");
            return true;
        }
        if (parseInt(g) > parseInt(5)) {
            alert("Time gap is 6 days");
            return true;
        }
        if (parseInt(g) > parseInt(4)) {
            alert("Time gap is 5 days");
            return true;
        }
        if (parseInt(g) > parseInt(3)) {
            alert("Time gap is 4 days");
            return true;
        }
        if (parseInt(g) > parseInt(2)) {
            alert("Time gap is 3 days");
            return true;
        }
        if (parseInt(g) > parseInt(1)) {
            alert("Time gap is 2 days");
            return true;
        }
        if (parseInt(g) > parseInt(0)) {
            alert("Time gap is 1 day");
            return true;
        }
        alert(today);
        return true;
    }
}
const validateCaptcha(body, parameters) {
    const secret_key = parameters["contactnextlevelbuilders_secret-key"]
    const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify"

    if (body.headers.getlist("X-Forwarded-For")) {
        let ip = body.headers.getlist("X-Forwarded-For")[0]
    } else {
        let ip = body.remote_addr
    }

    constdata = {
        'secret': secret_key,
        'response': token,
        'remoteip': ip
    }

    try {
        const response = requests.post(url, data=data)
        const result = response.json()

        if (result.get("success")) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log("Error validating CAPTCHA: ", error);
        throw error;
    }
}
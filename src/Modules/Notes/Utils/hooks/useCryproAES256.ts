import { AES, pad, mode, enc, PBKDF2 } from 'crypto-js';

export const MockPasswd = 'You shall not pass';

export const useCryptoAES256 = (): {
    encryptMessage: (message: string, passwd: string) => string;
    decryptMessage: (ciphertext: string, passwd: string) => string;
} => {
    const keySize = 256;
    const iterations = 1000;

    const salt = enc.Hex.parse('0jioj12e-9dj902j1jej01jfj2j10jej10');
    const iv = enc.Hex.parse('10111121315161718aeds2f43g3t321');

    // PBKDF2 - is a password-bassed key derivation function.
    const key256Bits = (passwd: string) =>
        PBKDF2(passwd, salt, {
            keySize: keySize / 32,
            iterations
        });

    const config = {
        iv,
        padding: pad.Pkcs7,
        mode: mode.CBC
    };

    const encryptMessage = (message: string, passwd: string) => {
        if (!message || !passwd) {
            return message;
        }
        try {
            const key = key256Bits(passwd);
            return AES.encrypt(message, key, config).toString();
        } catch (e) {
            return message;
        }
    };

    const decryptMessage = (ciphertext: string, passwd: string) => {
        if (!ciphertext || !passwd) {
            return ciphertext;
        }
        try {
            const key = key256Bits(passwd);
            return AES.decrypt(ciphertext, key, config).toString(enc.Utf8);
        } catch (e) {
            return ciphertext;
        }
    };

    return { encryptMessage, decryptMessage };
};

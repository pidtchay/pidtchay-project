/* eslint-disable jsdoc/require-returns */
import { AES, pad, mode, enc, PBKDF2 } from 'crypto-js';

/**
 * User custom AES string encryption hook.
 */
export function useCryptoAES256() {
    const keySize = 256;
    const iterations = 1000;

    const salt = enc.Hex.parse('0jioj12e-9dj902j1jej01jfj2j10jej10');
    const iv = enc.Hex.parse('10111121315161718aeds2f43g3t321');

    // PBKDF2 - is a password-bassed key derivation function.
    const key256Bits = (passwd: string) =>
        PBKDF2(passwd, salt, {
            keySize: keySize / 32,
            iterations: iterations
        });

    const config = {
        iv: iv,
        padding: pad.Pkcs7,
        mode: mode.CBC
    };

    const encryptMessage = async (message: string, passwd: string) => {
        const key = key256Bits(passwd);
        return await AES.encrypt(message, key, config).toString();
    };

    const decryptMessage = async (ciphertext: string, passwd: string) => {
        const key = key256Bits(passwd);
        return await AES.decrypt(ciphertext, key, config).toString(enc.Utf8);
    };

    return { encryptMessage, decryptMessage };
}

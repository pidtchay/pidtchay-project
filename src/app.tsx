// import React, { useState } from 'react';
// import { useCryptoAES256 } from 'Utils/useCryproAES256';

import React from 'react';
import { MarkdownNotes } from 'Container/Markdown/MarkdownNotes';
import 'antd/dist/antd.css';
// const PASSWD = 'ir3allyl0vebubblegum';

// const DEFAULT_MESAGE = 'Hello world';

export const App = () => {
    return <MarkdownNotes />;
    // const [message, setMessage] = useState(DEFAULT_MESAGE);

    // const { encryptMessage, decryptMessage } = useCryptoAES256();

    // const handleEncrypt = () => {
    //     const encrypted = encryptMessage(message, PASSWD);
    //     setMessage(encrypted);
    //     console.debug({ encrypted });
    // };

    // const handleDecrypt = () => {
    //     const decrypted = decryptMessage(message, PASSWD);
    //     setMessage(decrypted);
    //     console.debug({ decrypted });
    // };

    // const handleRefresh = () => {
    //     setMessage('Hello world');
    // };

    // return (
    //     <div className="App">
    //         <button onClick={handleEncrypt}>Encrypt</button>
    //         <button onClick={handleDecrypt}>Decrypt</button>
    //         <button onClick={handleRefresh}>Refresh</button>
    //     </div>
    // );
};

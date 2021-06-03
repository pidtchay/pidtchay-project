/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Request, Response } from 'express';
import { INoteData } from '../../../Modules/Notes/Models';

const data: INoteData = {
    id: '6cc6543a-a6f6-4214-943c-4946cb8496a5',
    lastUpdate: '04/20/2021 19:01:45',
    startDate: '04/20/2021 19:01:45',
    text:
        'Quaerat quia expedita ipsam doloremque repellat cupiditate quaerat. Ipsum numquam dignissimos praesentium id nihil odit. Quas hic maxime et. Accusantium laudantium veritatis. Recusandae dolores exercitationem blanditiis rerum repudiandae maiores.\n \rConsequatur consequatur itaque sunt fuga sequi suscipit minima mollitia. Est quisquam quas asperiores ut hic ipsum in necessitatibus totam. Architecto provident inventore non atque consectetur ratione dolorem soluta.\n \rFacere ut aut dolorem aliquid. Ea sed suscipit corrupti fuga dicta ipsum voluptas. Explicabo velit earum provident aut recusandae. Aut rerum omnis excepturi eius dicta suscipit. Iusto eos sed blanditiis ipsa sequi quisquam temporibus quia est. Et dolorem officiis soluta.',
    title: 'Suscipit odit adipisci in voluptatem sit.\nEt quae illo voluptatem provident.'
};

exports.response = (_req: Request, res: Response) => {
    res.status(200).send(data);
};

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Request, Response } from 'express';
import { INoteData } from '../../../Modules/Notes/Models';

const data: { notes: INoteData[] } = {
    notes: [
        {
            id: 'fce2e15b-f8a5-49ed-9095-d73cb6c47e82',
            startDate: '05/07/2021 12:21:08',
            lastUpdate: '05/07/2021 12:21:08',
            text:
                '# Eum doloremque nulla quia nihil rerum quis.\nEt ipsam perferendis laboriosam iste dolorem.\nAut facere occaecati.\nAnimi sit sint iste aut impedit odio voluptates aut minus.\nConsequatur ut suscipit.\nModi dolores consequatur ut. Harum sapiente in praesentium voluptatem laborum soluta. Adipisci distinctio dolor sit neque et. Tempora commodi ut vel. Adipisci et quam ab porro. Ducimus maiores quo possimus mollitia voluptas omnis praesentium.\n \rUt facere officiis architecto consequatur. Laboriosam qui natus iusto et placeat. Sint facilis consequatur. Modi iusto quidem non adipisci voluptas sit omnis. Alias laboriosam eius aliquid tenetur. Unde officiis repellendus nesciunt.\n \rEveniet dolore iure repellat voluptas maxime est. Eos nobis sit officia enim illo reiciendis debitis. Voluptas ipsam aperiam.',
            title:
                '# Eum doloremque nulla quia nihil rerum quis.\nEt ipsam perferendis laboriosam iste dolorem.\nAut facere occaecati.\nAnimi sit sint iste aut impedit odio voluptates aut minus.\nConsequatur ut suscipit.'
        },
        {
            id: '465c0721-9f6e-4af2-bac6-da7d8aa4ad50',
            startDate: '05/07/2021 12:21:08',
            lastUpdate: '05/07/2021 12:21:08',
            text:
                '# Beatae atque iste molestiae ipsum in accusamus.\nPorro velit maxime aut dolor voluptates et.\nAut eos est expedita quis velit nostrum.\nTemporibus ut eum voluptatem ratione nemo harum voluptatibus consequatur quam.\nNam accusantium earum et quia nihil aut autem voluptatum. Aut ratione quisquam necessitatibus vitae sit repudiandae. Laudantium aut distinctio dignissimos consequatur dolorum quisquam a. Est qui laudantium deleniti iusto nihil. Cupiditate culpa ut minima voluptate.\n \rPorro dolores eligendi suscipit quisquam non et officiis rem. Voluptatem nostrum cumque unde enim dolores aspernatur dolorem ipsum. Culpa laboriosam dicta modi porro quas vero ea vel. Officia illo similique non. Qui et quis. Eveniet eius et illum cum et quia.\n \rPerspiciatis quidem porro doloribus veritatis ullam labore minus. Et ab rerum. Voluptas facere possimus qui mollitia.',
            title:
                '# Beatae atque iste molestiae ipsum in accusamus.\nPorro velit maxime aut dolor voluptates et.\nAut eos est expedita quis velit nostrum.\nTemporibus ut eum voluptatem ratione nemo harum voluptatibus consequatur quam.'
        },
        {
            id: '1b2e3b55-28ba-4378-b4a0-9fa56d12079d',
            startDate: '05/07/2021 12:21:08',
            lastUpdate: '05/07/2021 12:21:08',
            text:
                '# Nisi accusantium non.\nQuis similique sed doloribus hic.\nQui earum maxime minima.\nAut nulla eos.\nEaque sint omnis distinctio amet.\nCulpa autem voluptatem quaerat. Corporis aliquid totam ipsam. Sint cumque aut debitis deserunt. Quis doloribus nihil. Id molestias aperiam aliquam exercitationem ipsum provident ipsam autem ducimus. Velit eum consectetur quidem voluptas ut distinctio laudantium qui placeat.\n \rRatione harum rerum accusantium. Error id sequi. Officia voluptatem impedit debitis sed aperiam illo. Recusandae est atque quo officiis. Quibusdam soluta nemo.\n \rQuaerat tempora eius assumenda. Sit numquam est sed alias nulla est. Provident ex voluptatibus et voluptates quia provident earum officia rerum. Beatae quas animi perferendis similique occaecati. Quas voluptatem itaque ea et molestiae dolorem et dolores.',
            title:
                '# Nisi accusantium non.\nQuis similique sed doloribus hic.\nQui earum maxime minima.\nAut nulla eos.\nEaque sint omnis distinctio amet.'
        },
        {
            id: '22d5ce52-f2cb-4011-b76f-02f74dbfa32f',
            startDate: '05/07/2021 12:21:08',
            lastUpdate: '05/07/2021 12:21:08',
            text:
                '# Consequatur deserunt velit nam.\nNecessitatibus sed rerum et explicabo iusto recusandae.\nAut autem eum voluptatem quas non excepturi culpa.\nNon et maiores eum.\nEnim non eius ad quia et voluptatem a cumque itaque. Est perferendis quos mollitia. Voluptatem officia possimus. Dolores dolorem eaque aspernatur voluptatibus numquam accusantium explicabo eos. Vel velit consequatur. Vero alias aut laborum.\n \rNobis est doloremque eveniet aperiam ducimus cumque et. Laudantium sequi nihil numquam nesciunt ea veniam sit. Eligendi consequatur harum ut voluptas odio reiciendis delectus dolor. Ea doloribus quaerat. Et est dolorem sapiente voluptatem quis eos sed non omnis.\n \rAmet et velit provident. Voluptas deleniti nesciunt aut cumque animi. Placeat praesentium deleniti veniam.',
            title:
                '# Consequatur deserunt velit nam.\nNecessitatibus sed rerum et explicabo iusto recusandae.\nAut autem eum voluptatem quas non excepturi culpa.\nNon et maiores eum.'
        },
        {
            id: '4ba5997f-818f-4bf4-b7d2-617e5ab37bcf',
            startDate: '05/07/2021 12:21:08',
            lastUpdate: '05/07/2021 12:21:08',
            text:
                '# Qui neque porro quibusdam quidem voluptas.\nPraesentium et eum inventore.\nNon sit consequatur ducimus quidem.\nAspernatur voluptatem est blanditiis totam nostrum odio ut omnis.\nEnim aperiam accusantium delectus sapiente rerum. Et in itaque incidunt. Nam in ex veniam cumque facere placeat voluptatem dolorem.\n \rVoluptates molestiae et voluptatem ab reprehenderit odit incidunt aut omnis. Dolorum iusto vero fugiat possimus iusto. Et laudantium in cumque natus quasi. Ullam eos iste laudantium. Minus deleniti ut. Architecto eum labore ipsam quo ut unde voluptatem.\n \rEt voluptate aut consequuntur totam eum. Asperiores harum non at eos deserunt assumenda. Perferendis dolorum saepe culpa aut non officia. Et occaecati omnis aperiam voluptas placeat aut cum. Natus voluptas temporibus et cum quisquam qui.',
            title:
                '# Qui neque porro quibusdam quidem voluptas.\nPraesentium et eum inventore.\nNon sit consequatur ducimus quidem.\nAspernatur voluptatem est blanditiis totam nostrum odio ut omnis.'
        },
        {
            id: '164f7247-2215-46dd-9b42-69e580a2d101',
            startDate: '05/10/2021 12:30:48',
            lastUpdate: '05/10/2021 12:30:48',
            text: 'WNMcMy+DS0dD3VSN8/zBkpmMVYW+tmIY4Inhg7EhxlpahmvdIwIibaFm6wZvnOoE0l1L+rA0DrhSG0JXSsCpXg==',
            title: 'SC2ESfOJmwBJ6RurqLL8yA=='
        }
    ]
};

exports.response = (_req: Request, res: Response) => {
    res.status(200).send(data);
};

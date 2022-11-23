import Bar from './Bar';

const section = {
    'sections': [
        {
            'nome': 'A',
            'detail': 'See Details'
        },
        {
            'nome': 'X',
            'detail': 'Habitat'
        },
        {
            'nome': 'Y',
            'detail': 'Sort'
        },
        {
            'nome': 'B',
            'detail': 'Back'
        },
    ]
};

export function Sections() {
    return (
        <div>
            {
                section.sections.map((sections, index) => {
                    return (
                        <Bar key={index} title={sections.nome} detail={sections.detail} />
                    );
                })
            }
        </div>
    );
}

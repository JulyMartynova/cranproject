import React, { useEffect } from 'react';
import tema from './Артемий.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
const CommandPage: React.FC = () => {
    interface commamndMember {
        id: number;
        name: string;
        surname: string;
        username: string;
        url: string;
    }
    const members: commamndMember[] = [
        { id: 1, name: 'Artem', surname: 'Volkonitin', username: '@artem_volkonitin' , url: "https://t.me/artem_volkonitin"},
        { id: 2, name: 'Artem', surname: 'Volkonitin', username: '@artem_volkonitin', url: "https://t.me/artem_volkonitin"},
        { id: 3, name: 'Artem', surname: 'Volkonitin', username: '@artem_volkonitin', url: "https://t.me/artem_volkonitin"},
        { id: 4, name: 'Artem', surname: 'Volkonitin', username: '@artem_volkonitin', url: "https://t.me/artem_volkonitin"},
        { id: 5, name: 'Artem', surname: 'Volkonitin', username: '@artem_volkonitin', url: "https://t.me/artem_volkonitin"},
        { id: 6, name: 'Artem', surname: 'Volkonitin', username: '@artem_volkonitin', url: "https://t.me/artem_volkonitin"},
    ];

    return (
        <div>
            <Header>
            </Header>
            <div className="wrapper">
            <div className="description">
                <h1>Привет, познакомимся?</h1>
                <p>
                    Мы переосмысливаем взаимодействие с виртуальной и дополненной реальностью, объединяя инновационные технологии с традиционными форматами. С нами вы сможете открыть новые горизонты восприятия, погружаясь в миры, где технологии и креативность создают незабываемые впечатления.
                </p>
            </div>
            <h2>Наша команда</h2>
            <div className="team">
                {members.map((member) => (
                    <div className="member" key={member.id}>
                        <img src={tema} alt="Member" />
                        <span style = {{color: "gray"}}>Роль в компании</span>
                        <span>{member.name} {member.surname}</span>
                        <a href={member.url} target="_blank" rel="noopener noreferrer">
                            {member.username}
                        </a>
                    </div>
                ))}
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default CommandPage;

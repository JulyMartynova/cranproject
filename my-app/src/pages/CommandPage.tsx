import React, { useEffect } from 'react';
import tema from '../img/Артемий.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
interface commamndMember {
    id: number;
    name: string;
    surname: string;
    username: string;
    url: string;
    img: string;
}
const members: commamndMember[] = [
    { id: 1, name: 'Artem', surname: 'Volkonitin', username: '@artem_volkonitin' , url: "https://t.me/artem_volkonitin", img: tema},
    { id: 2, name: 'Artem', surname: 'Volkonitin', username: '@artem_volkonitin', url: "https://t.me/artem_volkonitin", img: tema},
    { id: 3, name: 'Artem', surname: 'Volkonitin', username: '@artem_volkonitin', url: "https://t.me/artem_volkonitin", img: tema},
    { id: 4, name: 'Artem', surname: 'Volkonitin', username: '@artem_volkonitin', url: "https://t.me/artem_volkonitin", img: tema},
    { id: 5, name: 'Artem', surname: 'Volkonitin', username: '@artem_volkonitin', url: "https://t.me/artem_volkonitin", img: tema},
    { id: 6, name: 'Artem', surname: 'Volkonitin', username: '@artem_volkonitin', url: "https://t.me/artem_volkonitin", img: tema},
];
const CommandPage: React.FC = () => {
    useEffect(() => {
        document.title = `О нас`; // Устанавливаем заголовок страницы
    }, []);
    return (
        <div>
            <Header>
            </Header>
            <div className="wrapper">
            <div className="description">
                <h2>Привет, познакомимся?</h2>
                <p>
                    Мы переосмысливаем взаимодействие с виртуальной и дополненной реальностью, объединяя инновационные технологии с традиционными форматами. С нами вы сможете открыть новые горизонты восприятия, погружаясь в миры, где технологии и креативность создают незабываемые впечатления.
                </p>
            </div>
            <div className="team-container">
            <h3>Наша команда</h3>
            <div className="team">
                {members.map((member) => (
                    <div className="member" key={member.id}>
                        <img src={member.img} alt="Member" loading='lazy'/>
                        <span style = {{color: "gray"}}>Роль в компании</span>
                        <span>{member.name} {member.surname}</span>
                        <a href={member.url} target="_blank" rel="noopener noreferrer">
                            {member.username}
                        </a>
                    </div>
                ))}
            </div>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default CommandPage;

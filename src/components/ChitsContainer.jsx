import { languages } from '../assets/languages';

export function ChitsContainer(props) {
    const languageChits = languages.map((lang, index) => {
        const isLanguageLost = index < props.wrongGuessCount;
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color,
        };

        return (
            <span
                key={lang.name}
                className={`chits ${isLanguageLost ? 'lost' : ''}`}
                style={styles}
            >
                {lang.name}
            </span>
        );
    });
    const styles = {
        backgroundColor: props.bgColor,
        color: props.color,
    };

    return <section className="chitscontainer">{languageChits}</section>;
}

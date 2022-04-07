import { useState } from 'react';

const ContactForm = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [gender, setGender] = useState('X');
    const [condition, setCondition] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = { firstname, lastname, gender, condition };
        console.log('Formulaire envoyer ♥', data);

        setFirstname('');
        setLastname('');
        setGender('X');
        setCondition(false);
    };

    return (
        <>
            <h3>Formulaire de contact</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='firstname'>Prenom : </label>
                    <input id='firstname' type='text' required
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='lastname'>Nom : </label>
                    <input id='lastname' type='text' required
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div>
                    <label>Sexe : </label>
                    <input id='radioH' type="radio" name="gender"
                        checked={gender === 'H'}
                        onChange={() => setGender('H')}
                    />
                    <label htmlFor='radioH'>H</label>
                    <input id='radioF' type="radio" name="gender" value='F'
                        checked={gender === 'F'}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <label htmlFor='radioF'>F</label>
                    <input id='radioX' type="radio" name="gender" value='X'
                        checked={gender === 'X'}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <label htmlFor='radioX'>X</label>
                </div>
                <div>
                    <label htmlFor='condition'>Accepter les conditions : </label>
                    <input id='condition' type="checkbox"
                        checked={condition}
                        onChange={(e) => setCondition(e.target.checked)} />
                </div>
                <button type="submit" disabled={!(firstname && lastname)} >Envoyer</button>
            </form>
        </>
    );
};

export default ContactForm;
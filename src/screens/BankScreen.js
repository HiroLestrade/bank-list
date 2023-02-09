import Bank from '../components/Bank'

const BankScreen = ({route}) => {
    const {bankName, url, age, description} = route.params;

    return(
        <Bank bankName={bankName} url={url} age={age} description={description} />
    );
}

export default BankScreen;
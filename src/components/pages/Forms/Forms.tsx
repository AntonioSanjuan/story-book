import FormExampleBasic from '../../organisms/formExampleBasic/formExampleBasic';
import FormExampleWithEmailValidator from '../../organisms/formExampleWithEmailValidator/formExampleWithEmailValidator';
import './Forms.css';

function FormsPage() {
  return (
    <>
      <section>
        <FormExampleBasic />
      </section>

      <section>
        <FormExampleWithEmailValidator />
      </section>
    </>
  );
}

export default FormsPage;

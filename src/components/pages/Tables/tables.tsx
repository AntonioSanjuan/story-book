import './Tables.css';
import TableExampleWithPosition from '../../organisms/tableExampleWithPosition/tableExampleWithPosition';
import TableExampleWithStickyScroll from '../../organisms/tableExampleWithStickyScroll/tableExampleWithStickyScroll';
import TableExampleWithSorting from '../../organisms/tableExampleWithSorting/tableExampleWithSorting';
import TableExampleWithHideAtPx from '../../organisms/tableExampleWithHideAtPx/tableExampleWithHideAtPx';
import TableExampleWithCustomRowHeight from '../../organisms/tableExampleWithCustomRowHeight/tableExampleWithCustomRowHeight';

function TablesPage() {
  return (
    <>
      <section>
        <TableExampleWithStickyScroll />
      </section>

      <section>
        <TableExampleWithPosition />
      </section>

      <section>
        <TableExampleWithSorting />
      </section>

      <section>
        <TableExampleWithHideAtPx />
      </section>

      <section>
        <TableExampleWithCustomRowHeight />
      </section>
    </>

  );
}

export default TablesPage;

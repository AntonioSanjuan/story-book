import './Tables.css';
import TableExampleWithPosition from '../../organisms/tableExampleWithPosition/tableExampleWithPosition';
import TableExampleWithStickyScroll from '../../organisms/tableExampleWithStickyScroll/tableExampleWithStickyScroll';
import TableExampleWithSorting from '../../organisms/tableExampleWithSorting/tableExampleWithSorting';
import TableExampleWithHideAtPx from '../../organisms/tableExampleWithHideAtPx/tableExampleWithHideAtPx';
// import Input from '../../atoms/input/input';

function TablesPage() {
  return (
    <>
      <section className="Table_StickyScroll">
        <TableExampleWithStickyScroll />
      </section>

      <section className="Tables_PositionRightActions">
        <TableExampleWithPosition />
      </section>

      <section className="Tables_Sorting">
        <TableExampleWithSorting />
      </section>

      <section className="Tables_HiddeAt">
        <TableExampleWithHideAtPx />
      </section>
    </>

  );
}

export default TablesPage;

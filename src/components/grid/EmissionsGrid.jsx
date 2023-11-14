import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';

const EmissionsGrid = () => {
    return (
        <GridComponent >
            <ColumnsDirective>
                <ColumnDirective field='Department' width='200' textAlign="Left" />
                <ColumnDirective field='Percentage' width='150' textAlign="Right" />
                <ColumnDirective field='Emission' width='150' textAlign="Right" />
                <ColumnDirective field='Actions' width='150'  textAlign="Right" />
            </ColumnsDirective>
        </GridComponent>
    )
}

export default EmissionsGrid
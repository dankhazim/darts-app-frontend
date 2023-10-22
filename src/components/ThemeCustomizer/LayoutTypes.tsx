import { Form } from 'react-bootstrap';
import * as layoutConstants from 'appConstants';

type LayoutTypesProps = {
  changeLayoutType: (value: string) => void;
  layoutType: string;
  layoutConstants: typeof layoutConstants.LayoutTypes;
};

const LayoutTypes = ({
  changeLayoutType,
  layoutType,
  layoutConstants
}: LayoutTypesProps) => {
  return (
    <>
      <h5 className="mt-3">Layout</h5>

      <hr className="mt-1" />

      <Form.Check className="form-check form-switch mb-1">
        <Form.Check.Input
          type="radio"
          onChange={e => changeLayoutType(e.target.value)}
          name="layout-type"
          value={layoutConstants.LAYOUT_VERTICAL}
          id="vertical-layout"
          checked={layoutType === layoutConstants.LAYOUT_VERTICAL}
        />
        <Form.Check.Label htmlFor="vertical-layout">
          Vertical Layout
        </Form.Check.Label>
      </Form.Check>
    </>
  );
};

export default LayoutTypes;

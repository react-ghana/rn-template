import {Dialog, RadioButton, RadioOption} from 'lib_components';
import * as React from 'react';

type ChangeLanguageModalProps = {
  isVisible: boolean;
  hideModal: () => void;
};

const languageOptions: RadioOption[] = [
  {
    label: 'English',
    value: 'english',
  },
  {
    label: 'Vietnamese',
    value: 'vietnamese',
  },
  {
    label: 'French',
    value: 'French',
  },
];

const ChangeLanguageModal: React.FC<ChangeLanguageModalProps> = ({
  isVisible,
  hideModal,
}) => {
  const _onItemPressed = (item: RadioOption) => {
    console.log('_onItemPressed -> item', item);
  };

  return (
    <Dialog
      title="Change Language"
      isVisible={isVisible}
      onBackdropPress={hideModal}>
      <RadioButton data={languageOptions} onItemPressed={_onItemPressed} />
    </Dialog>
  );
};

export default ChangeLanguageModal;

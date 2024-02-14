import { DNA } from 'react-loader-spinner';

export default function Loader() {
  return (
    <DNA
      visible={true}
      height="160"
      width="200"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
}

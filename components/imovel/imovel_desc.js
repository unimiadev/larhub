const ImovelDescricao = ({ imovelSelecionado }) => (
    <div className="mx-auto w-5/6 flex flex-col py-2">
        <p className="font-medium">Descrição do Imóvel</p>
        <div>
            <p className="text-gray-600 text-lg font-normal my-1">
                {imovelSelecionado.descricao}
            </p>
        </div>
    </div>
);

export default ImovelDescricao;
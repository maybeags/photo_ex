/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as S from "./style";

/**
 *  1. 사진 등록하기를 통해 등록된 이미지들을 각자 자유롭게 디자인하여 불러와야함.
 *  2. localStorage에 저장된 사진이 없으면 
 *      <h1>불러올 사진이 없습니다.<h1>
 *      문구가 중앙에 나오도록해야함.
 */

function PhotoAlbum() {
    const [ loadPhotos, setLoadPhotos ] = useState([]); //return에서 재렌더링이 어쩌고 하기 때문에 useState를 쓴다.

    useEffect(() => {
        const localStorageFiles = !localStorage.getItem("photo") 
                                    ? [] 
                                    : JSON.parse(localStorage.getItem("photo"));

        setLoadPhotos(() => localStorageFiles);
    }, []); // 이 페이지가 로드 됐을 때 어쩌고 하기 때문에 useEffect를 쓴다(최초에 한 번이라서 , [] 이다.)

    return (
        <div css={S.layout}>
            {loadPhotos.map(
                (photo) =>
                    <div key={photo.id} css={S.imageCard}>
                        <div css={S.imageBox}>
                            <img src={photo.imageUrl} alt="" />
                        </div>
                    </div>
            )}
        </div>
    );
}

export default PhotoAlbum;
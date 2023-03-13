import { AuthContext } from "../../context/authContext";
import { useContext, useState,  ChangeEvent, FormEvent } from "react";
import { Navigate } from "react-router-dom";
import css from "./admin.module.css";
import { FirebaseDatabase, FirebaseStorage } from "../../firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { push, ref as dbRef } from "firebase/database";

type FormData = {
  ID: string;
  name: string;
  beschreibung: string;
  kurzbeschreibung: string;
  preis1: string;
  preis2: string;
  preisw: string;
  image: File | null;
};

type ItemData = {
  ID: string;
  name: string;
  beschreibung: string;
  kurzbeschreibung: string;
  preis1: string;
  preis2: string;
  preisw: string;
  imageUrl: string;
};
const Admini = () => {
  const { status } = useContext(AuthContext);
  const [formData, setFormData] = useState<FormData>({
    ID: "",
    name: "",
    beschreibung: "",
    kurzbeschreibung: "",
    preis1: "",
    preis2: "",
    preisw: "",
    image: null,
  });

  const handleFormChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: event.target.files[0],
    }));
  };

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // Upload image to Firebase Storage
    const imageRef = ref(FirebaseStorage, `images/${formData.image!.name}`);
    await uploadBytes(imageRef, formData.image!);
    const imageUrl = await getDownloadURL(imageRef);

    // Create new item in Firebase Database
    const newItem: ItemData = {
      ID: formData.ID,
      name: formData.name,
      beschreibung: formData.beschreibung,
      kurzbeschreibung: formData.kurzbeschreibung,
      preis1: formData.preis1,
      preis2: formData.preis2,
      preisw: formData.preisw,
      imageUrl,
    };
    push(dbRef(FirebaseDatabase, "items"), newItem);
  };

  if (status == "checking") {
    return <div className={css.adminContainer}>Checking</div>;
  } else if (status == "authenticated") {
    return (
      <div className={css.adminContainer}>
        <form className={css.itemForm} onSubmit={handleFormSubmit}>
          <label htmlFor="ID">ID:</label>
          <input
            type="text"
            id="ID"
            name="ID"
            className={css.textInputs}
            value={formData.ID}
            onChange={handleFormChange}
            required
          />
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className={css.textInputs}
            value={formData.name}
            onChange={handleFormChange}
            required
          />
          <label htmlFor="beschreibung">Beschreibung:</label>
          <textarea
            id="beschreibung"
            name="beschreibung"
            className={css.textInputs}
            value={formData.beschreibung}
            onChange={handleFormChange}
            required
          />

          <label htmlFor="kurzbeschreibung">Kurzbeschreibung:</label>
          <textarea
            id="kurzbeschreibung"
            name="kurzbeschreibung"
            value={formData.kurzbeschreibung}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setFormData({ ...formData, kurzbeschreibung: e.target.value })
            }
            className={css.textInputs}
          />

          <label htmlFor="preis1">Preis 1:</label>
          <input
            type="text"
            id="preis1"
            name="preis1"
            value={formData.preis1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, preis1: e.target.value })
            }
            className={css.textInputs}
          />

          <label htmlFor="preis2">Preis 2:</label>
          <input
            type="text"
            id="preis2"
            name="preis2"
            value={formData.preis2}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, preis2: e.target.value })
            }
            className={css.textInputs}
          />

          <label htmlFor="preisw">Preis W:</label>
          <input
            type="text"
            id="preisw"
            name="preisw"
            value={formData.preisw}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, preisw: e.target.value })
            }
            className={css.textInputs}
          />

          <label htmlFor="image">Bild:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, image: e.target.files?.[0] })
            }
            className={css.textInputs}
          />
          <button type="submit">hallo</button>
        </form>
      </div>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default Admini;

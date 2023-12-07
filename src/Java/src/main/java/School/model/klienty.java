package School.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import School.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: клиенты
 */
@Entity(name = "IISSchoolклиенты")
@Table(schema = "public", name = "клиенты")
public class klienty {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Имя")
    private String имя;

    @Column(name = "Фамилия")
    private String фамилия;

    @Column(name = "Отчетво")
    private String отчетво;

    @Column(name = "Пол")
    private String пол;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zapis")
    @Convert("Zapis")
    @Column(name = "Запись", length = 16, unique = true, nullable = false)
    private UUID _zapisid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zapis", insertable = false, updatable = false)
    private Zapis zapis;


    public klienty() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getИмя() {
      return имя;
    }

    public void setИмя(String имя) {
      this.имя = имя;
    }

    public String getФамилия() {
      return фамилия;
    }

    public void setФамилия(String фамилия) {
      this.фамилия = фамилия;
    }

    public String getОтчетво() {
      return отчетво;
    }

    public void setОтчетво(String отчетво) {
      this.отчетво = отчетво;
    }

    public String getПол() {
      return пол;
    }

    public void setПол(String пол) {
      this.пол = пол;
    }


}
module.exports = (sequelize, DataTypes) => {
  const Exam = sequelize.define('Exam', {
    subject: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {});
  
  Exam.associate = function(models) {
    // Add associations if necessary
  };
  
  return Exam;
};
